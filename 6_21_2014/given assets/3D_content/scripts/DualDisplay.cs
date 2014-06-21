using UnityEngine;
using System.Collections;


namespace UnityAssets
{
	public class DualDisplay : MonoBehaviour
	{
		public Camera mainCamera, controlsCamera;
		public bool autoEnable = true;


		public bool Available
		{
			get
			{
				return enabled && Display.display.Length > 1;
			}
		}


		public bool Active
		{
			get
			{
				return enabled && controlsCamera.enabled;
			}
			set
			{
				if (!value || !Available)
				{
					controlsCamera.enabled = false;

					controlsCamera.SetTargetBuffers (Display.mainDisplay.colorBuffer, Display.mainDisplay.depthBuffer);
					mainCamera.SetTargetBuffers (Display.mainDisplay.colorBuffer, Display.mainDisplay.depthBuffer);
				}
				else
				{
					Display secondDisplay = Display.display[1];

					mainCamera.SetTargetBuffers (secondDisplay.colorBuffer, secondDisplay.depthBuffer);
					controlsCamera.SetTargetBuffers (Display.mainDisplay.colorBuffer, Display.mainDisplay.depthBuffer);

					controlsCamera.enabled = true;
				}
			}
		}


		void Reset ()
		{
			mainCamera = Camera.main;
		}


		void Start ()
		{
			if (mainCamera == null || controlsCamera == null)
			{
				Debug.LogError ("DualDisplay missing a camera reference");
				Destroy (this);
				return;
			}

			controlsCamera.enabled = false;
		}


		void Update()
		{
			if (Available)
			{
				if (autoEnable)
				{
					Active = true;
				}
			}
			else
			{
				Active = false;
			}
		}
	}
}
